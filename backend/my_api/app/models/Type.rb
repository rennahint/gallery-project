class Type < ApplicationRecord

  validates :name, presence: true

  enum :type, { shoes: 0, painting: 1, sculpture: 2  }
end