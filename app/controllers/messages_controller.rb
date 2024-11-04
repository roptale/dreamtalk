class MessagesController < ApplicationController
  before_action :set_chatroom

  def create
    @message = @chatroom.messages.build(message_params)
    @message.user = current_user

    if @message.save
      redirect_to chatroom_path(@chatroom), notice: "Message sent successfully."
    else
      render "chatrooms/show"
    end
  end

  private

  def set_chatroom
    @chatroom = Chatroom.find(params[:chatroom_id])
  end

  def message_params
    params.require(:message).permit(:content, :message_type)
  end
end
