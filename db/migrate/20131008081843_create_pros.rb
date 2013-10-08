class CreatePros < ActiveRecord::Migration
  def change
    create_table :pros do |t|
      t.string :name
      t.string :localhost
      t.string :url
      t.text :des

      t.timestamps
    end
  end
end
