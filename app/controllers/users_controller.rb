class UsersController < ApplicationController
  def index
    @users = User.all
    @users = @users.select { |user| user.onboarded? }
  end

  def show
    @user = User.find(params[:id])
  end

  def toggle_favorite
    @user = User.find(params[:id])
    Rails.logger.debug "Current favorite status for user #{@user.id}: #{current_user.favorited?(@user)}"

    if current_user.favorited?(@user)
      Rails.logger.debug "Unfavoriting user #{@user.id}"
      current_user.unfavorite(@user)
      status = 'unfavorited'
    else
      Rails.logger.debug "Favoriting user #{@user.id}"
      current_user.favorite(@user)
      status = 'favorited'
    end

    Rails.logger.debug "Final Status: #{status}"
    respond_to do |format|
      format.json { render json: { status: status } }
    end
  end

  def favorites
    @favorites = current_user.favorited_users
  end
end
