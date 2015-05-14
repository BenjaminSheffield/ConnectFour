class CreateWinners < ActiveRecord::Migration
  def change
    create_table :winners do |t|
      t.string :name, null: false
      t.integer :win_count
      t.timestamps null: false
    end
  end
end