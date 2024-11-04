class AddDetailsToMessages < ActiveRecord::Migration[7.1]
  def change
    add_column :messages, :message_type, :integer
    add_column :messages, :video_url, :string
    add_column :messages, :call_info, :string
  end
end
