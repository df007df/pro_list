class AddTestipToPros < ActiveRecord::Migration
  def change
  	add_column :pros, :testip, :string
  end
end
