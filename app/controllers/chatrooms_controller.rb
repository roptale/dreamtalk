class ChatroomsController < ApplicationController
  before_action :set_chatroom, only: [:show]

  def index
    @chatrooms = Chatroom.where(creator: current_user).or(Chatroom.where(receiver: current_user))
  end

  def show
    @message = Message.new
  end

  def new
    @chatroom = Chatroom.new
  end

  def create
    @chatroom = Chatroom.new(chatroom_params)
    @chatroom.creator = current_user

    if @chatroom.save
      redirect_to @chatroom, notice: "Chatroom created successfully."
    else
      render :new
    end
  end

  private

  def set_chatroom
    @chatroom = Chatroom.find(params[:id])
  end

  def chatroom_params
    params.require(:chatroom).permit(:receiver_id)
  end
end
