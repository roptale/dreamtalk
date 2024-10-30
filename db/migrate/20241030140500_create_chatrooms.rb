class CreateChatrooms < ActiveRecord::Migration[7.1]
  def change
    create_table :chatrooms do |t|
      t.integer :creator_id
      t.integer :receiver_id

      t.timestamps
    end
  end
end
