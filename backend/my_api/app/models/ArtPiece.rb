class ArtPiece < ApplicationRecord

  belongs_to :commission
  validates :description, :title, :price, :art_type, presence: true
  enum :art_type, { shoes: 0, painting: 1, sculpture: 2 }
end