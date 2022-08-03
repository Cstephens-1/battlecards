class CreateUnits < ActiveRecord::Migration[6.1]
  def change
    create_table :units do |t|
      t.string :name
      t.integer :health
      t.integer :rarity
      t.integer :cost

      t.timestamps
    end
  end
end
