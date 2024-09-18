# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# This file is the source Rails uses to define your schema when running `bin/rails
# db:schema:load`. When creating a new database, `bin/rails db:schema:load` tends to
# be faster and is potentially less error prone than running all of your
# migrations from scratch. Old migrations may fail to apply correctly if those
# migrations use external dependencies or application code.
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema[7.2].define(version: 2024_09_18_154320) do
  create_table "art_pieces", force: :cascade do |t|
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.string "title"
    t.string "description"
    t.float "price"
    t.integer "art_type", default: 0
    t.integer "commission_id"
    t.index ["commission_id"], name: "index_art_pieces_on_commission_id"
  end

  create_table "commissions", force: :cascade do |t|
    t.string "description"
    t.float "budget"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.integer "user_id"
    t.index ["user_id"], name: "index_commissions_on_user_id"
  end

  create_table "users", force: :cascade do |t|
    t.string "email_address"
    t.string "first_name"
    t.string "last_name"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  add_foreign_key "art_pieces", "commissions"
  add_foreign_key "commissions", "users"
end
