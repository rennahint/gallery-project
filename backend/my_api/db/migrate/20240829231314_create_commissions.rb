class CreateCommissions < ActiveRecord::Migration[7.2]
  def change
    create_table :commissions do |t|
      t.string :description
      t.float :budget

      t.timestamps
    end
    add_reference :art_pieces, :commission, foreign_key: true
  end
end
