class CommissionsController < ApplicationController
  def index
    @commissions = Commission.all
    render json: @commissions
  end

  def create
    #create a user using email and first/last name entered - get user id
    #uniqueness validation - check if it passes
    #create a commission with description and budget, and the user id created above
    #send user and commission to database to save
    
    @commission = Commission.new(commission_params)
    if @commission.save
      render json: @commission, status: :created
    else
      render json: @commission.errors, status: :unprocessable_entity
    end

  end

  private

  def commission_params
    params.require(:commission).permit(:description, :budget, :user_attributes => [:first_name, :last_name, :email_address])
  end


end