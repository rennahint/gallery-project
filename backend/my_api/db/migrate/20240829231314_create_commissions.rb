class CreateCommissions < ActiveRecord::Migration[7.2]
  def change
    create_table :commissions do |t|
      t.string :email_address 
      t.string :user_first_name
      t.string :user_last_name
      t.string :commission_description
      t.float :commission_budget

      t.timestamps
    end
    add_reference :commissions, :art_pieces, foreign_key: true
  end
end
