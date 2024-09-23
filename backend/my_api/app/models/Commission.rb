class Commission < ApplicationRecord

  belongs_to :user
  has_many :art_piece
  validates :description, :budget, presence: true

  accepts_nested_attributes_for :user
  
end