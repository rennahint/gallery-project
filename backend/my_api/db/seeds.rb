# This file should ensure the existence of records required to run the application in every environment (production,
# development, test). The code here should be idempotent so that it can be executed at any point in every environment.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Example:
#
#   ["Action", "Comedy", "Drama", "Horror"].each do |genre_name|
#     MovieGenre.find_or_create_by!(name: genre_name)
#   end
# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#

#Create some Users
user1 = User.create(email_address: '123@gmail.com',
first_name: 'Ether',
last_name: 'Echo')

user2 = User.create(email_address: '5678@gmail.com',
first_name: 'Mountain',
last_name: 'Frost')

# Create some commissions
commission1 = Commission.create(description: "black sky with tardis painting",
budget: 80.00,
user: user1)

commission2 = Commission.create(description: "red naruto shoes",
budget: 90.00,
user: user2)

commission3 = Commission.create(description: "blue httyd shoes",
budget: 90.00,
user: user1)

# Create artpieces associated with the commissions
ArtPiece.create(
title: "Black Sky with Tardis",
description: "black shoes with tardis",
price: 75.00,
art_type: :painting, 
commission: commission1)

ArtPiece.create(
title: "Naruto Shoes", 
description: "red shoes with Naruto character and symbols",
price: 85.00,
art_type: :shoes,
commission: commission2)

ArtPiece.create(
title: "How To Train Your Dragon Shoes", 
description: "Blue and Grey background with Hiccup and Toothless",
price: 90.00,
art_type: :shoes,
commission: commission3)

