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
if Rails.env.development?
  puts "🌱 SEED DB 🌱"
  puts "📁 #{Dir.pwd} 📁"
  # seed_files = Dir[File.join(Rails.root, 'db', 'seeds', '*.rb')].sort
  # seeds need to load in a specific order
  [
    'users_seeds.rb',
    'commissions_seeds.rb',
    'art_pieces_seeds.rb',

  ].each do |seed|
    seed_file = File.join(Rails.root, 'db', 'seeds', seed)
    puts "⏳📋 #{seed_file} ⏳📋"
    load seed_file
  end
  puts "🌳 SEEDED DB 🌳"
end
