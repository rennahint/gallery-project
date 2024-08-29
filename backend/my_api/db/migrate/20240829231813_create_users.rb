class CreateUsers < ActiveRecord::Migration[7.2]
  def change
    create_table :users do |t|

      t.string :email_address 
      t.string :user_first_name
      t.string :user_last_name

      t.timestamps
    end
    add_reference :commissions, :users, foreign_key: true
  end
end
