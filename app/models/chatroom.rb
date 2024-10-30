class Chatroom < ApplicationRecord
  belongs_to :creator, class_name: 'User'
  belongs_to :receiver, class_name: 'User'
  has_many :messages
end
