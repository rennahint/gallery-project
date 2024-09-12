class ArtPiece < ApplicationRecord

  has_one :commission
  has_one :type
  validates :description, :title, :price, :type, presence: true
  enum :art_type, { shoes: 0, painting: 1, sculpture: 2 }
end