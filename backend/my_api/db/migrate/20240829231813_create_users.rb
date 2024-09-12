class CreateUsers < ActiveRecord::Migration[7.2]
  def change
    create_table :users do |t|

      t.string :email_address 
      t.string :first_name
      t.string :last_name

      t.timestamps
    end
    add_reference :commissions, :user, foreign_key: true
  end
end
