class ChatroomsController < ApplicationController
  before_action :set_chatroom, only: [:show]

  def index
    @chatrooms = Chatroom.where(creator: current_user).or(Chatroom.where(receiver: current_user))
  end

  def show
    @message = Message.new

    @other_user = if @chatroom.creator == current_user
      @chatroom.receiver
    else
      @chatroom.creator
    end
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

  def find_or_create_chatroom
    user_id = params[:user_id]

    chatroom = Chatroom.find_by(creator_id: current_user.id, receiver_id: user_id) ||
               Chatroom.find_by(creator_id: user_id, receiver_id: current_user.id)
    chatroom ||= Chatroom.create!(creator_id: current_user.id, receiver_id: user_id)

    redirect_to chatroom_path(chatroom)
  end

  private

  def set_chatroom
    @chatroom = Chatroom.find(params[:id])
  end

  def chatroom_params
    params.require(:chatroom).permit(:receiver_id)
  end
end
