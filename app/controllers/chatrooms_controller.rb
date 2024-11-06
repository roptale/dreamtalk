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

  def token
    # Get the username from the request
    # @username = params['username']
    # Ou bien : get the username from the current_user
    username = current_user.first_name

    # Handle error if no username was passed into the request
    return if @username.nil?

    # Get the Twilio SID and API key from the environment
    twilio_account_sid = ENV.fetch('TAC8a700814d9726e4cbce8b1cbbfb06ea5')
    twilio_api_key_sid = ENV.fetch('SK1b1d482d7718203eb92ae816118beb15')
    twilio_api_key_secret = ENV.fetch('XxfBdOAxUeAk1nFEnuOyUOIqidjWqUOn')

    # Create Video grant for your token
    grant = Twilio::JWT::AccessToken::VideoGrant.new
    grant.room = 'myroom'

    # Create an access token
    token = Twilio::JWT::AccessToken.new(
      twilio_account_sid,
      twilio_api_key_sid,
      twilio_api_key_secret,
      [grant],
      identity: @username,
      ttl: 3600
    )

    # Generate and return the token as a JSON response
    render json: { token: token.to_jwt }, status: :ok
  end
end
