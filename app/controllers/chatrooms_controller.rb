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
    @chatroom = Chatroom.new(creator: current_user, receiver: User.find(params[:user_id]))

    if @chatroom.save
      redirect_to @chatroom
    else
      render "users/show"
    end
  end

  def token
    # Get the username from the request
    @username = params['username']

    # Handle error if no username was passed into the request
    json status: 400, error: 'No username in request' if @username.nil?
    twilio_account_sid = ENV['TWILIO_ACCOUNT_SID']
    twilio_api_key_sid = ENV['TWILIO_API_KEY_SID']
    twilio_api_key_secret = ENV['TWILIO_API_KEY_SECRET']

    # Create an access token
    token = Twilio::JWT::AccessToken.new(twilio_account_sid, twilio_api_key_sid, twilio_api_key_secret, [], identity: @username);
puts token
    # Create Video grant for your token
    grant = Twilio::JWT::AccessToken::VideoGrant.new
    grant.room = 'My Video Room'
    token.add_grant(grant)

    # Generate and return the token as a JSON response
    render json: {status: 200, token: token.to_jwt}
  end

  private

  def set_chatroom
    @chatroom = Chatroom.find(params[:id])
  end


end
