class CreateTypes < ActiveRecord::Migration[7.2]
  def change
    create_table :types do |t|
      t.string :name
      t.timestamps
    end
    add_reference :art_pieces, :types, foreign_key: true

  end
end
