
class CreateArtPieces < ActiveRecord::Migration[7.2]
  def change
    enable_extension 'pgcrypto' 
    create_table :art_pieces, id: :uuid do |t|
      t.timestamps
      t.string :title
      t.string :description
      t.float :price
    end
  end
end
