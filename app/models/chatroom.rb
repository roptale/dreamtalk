class Chatroom < ApplicationRecord
  belongs_to :creator, class_name: 'User'
  belongs_to :receiver, class_name: 'User'
  has_many :messages

  validates :creator_id, presence: true
  validates :receiver_id, presence: true
end
