class Commission < ApplicationRecord

  belongs_to :user
  has_many :art_piece
  validates :description, :budget, presence: true
  
end