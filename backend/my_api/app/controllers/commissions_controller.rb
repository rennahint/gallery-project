class CommissionsController < ApplicationController
  def index
    @commissions = Commission.all
    render json: @commissions
  end

  def create
    @commission = Commission.new(commission_params)
    if @commission.save
      render json: @commission, status: :created
    else
      render json: @commission.errors, status: :unprocessable_entity
    end
  end

  private

  def commission_params
    params.require(:commission).permit(:name)
  end
end