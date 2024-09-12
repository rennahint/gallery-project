class Commission < ApplicationRecord

  belongs_to :user
  belongs_to :art_piece
  validates :description, presence: true
  
end