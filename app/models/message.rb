class Message < ApplicationRecord
  belongs_to :chatroom
  belongs_to :user

  enum message_type: { text: 0, video: 1, call: 2 }

  validates :content, presence: true, if: :text?
  validates :video_url, presence: true, if: :video?
  validates :call_info, presence: true, if: :call?
end
