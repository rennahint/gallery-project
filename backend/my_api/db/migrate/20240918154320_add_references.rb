class AddReferences < ActiveRecord::Migration[7.2]
  def change
    add_reference :art_pieces, :commission, foreign_key: true
    add_reference :commissions, :user, foreign_key: true
  end
end
