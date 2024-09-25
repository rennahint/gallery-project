class CommissionsController < ApplicationController
  def index
    @commissions = Commission.all
    render json: @commissions
  end


  def create
    # Extract the user attributes and commission details from the params
    user_attributes = commission_params[:user_attributes]
    commission_details = commission_params.except(:user_attributes)

    # Find or create the user by email
    user = User.find_or_initialize_by(email_address: user_attributes[:email_address])

    if user.new_record?
      # If the user is new, attempt to save it
      if user.update(user_attributes) # Assuming you want to save first_name, last_name, and email
        # Now create the commission for this user
        create_commission(user, commission_details)
      else
        # Handle user save failure
        render json: { errors: user.errors.full_messages }, status: :unprocessable_entity
      end
    else
      # User already exists, just create the commission
      create_commission(user, commission_details)
    end
  end

  private

  def commission_params
    params.require(:commission).permit(:description, :budget, user_attributes: [:first_name, :last_name, :email_address])
  end

  def create_commission(user, commission_details)
    @commission = user.commissions.build(commission_details)

    if @commission.save
      render json: @commission, status: :created
    else
      render json: { errors: @commission.errors.full_messages }, status: :unprocessable_entity
    end
  end

end

