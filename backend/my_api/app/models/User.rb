class User < ApplicationRecord

  has_many :commissions
  validates :first_name, :last_name, :email_address, presence: true
  validates :email_address, uniqueness: true

end