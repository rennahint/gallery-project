
class CreateArtPieces < ActiveRecord::Migration[7.2]
  def change
    create_table :art_pieces do |t|
      t.timestamps
      t.string :title
      t.string :description
      t.float :price
    end
  end
end
