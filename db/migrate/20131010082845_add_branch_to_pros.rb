class AddBranchToPros < ActiveRecord::Migration
  def change
  	add_column :pros, :branch, :string
  end
end
