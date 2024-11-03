class UsersController < ApplicationController

  def index
    @users = User.all
    @users = @users.select { |user| user.onboarded? }
  end
end
