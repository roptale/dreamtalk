class AddDetailsToUsers < ActiveRecord::Migration[7.1]
  def change
    add_column :users, :first_name, :string
    add_column :users, :city, :string
    add_column :users, :age, :integer
    add_column :users, :description, :text
    add_column :users, :grade_id, :integer
    add_column :users, :latitude, :float
    add_column :users, :longitude, :float
  end
end
