class UsersController < ApplicationController
  def index
    @users = User.all
    @users = @users.select { |user| user.onboarded? }

  if params[:city].present?
    @users = @users.select { |user| user.city.downcase.include?(params[:city].downcase) }
  end

  # Filtrer par langue parlée
  if params[:spoken_language].present?
    @users = @users.select do |user|
      user.user_languages.any? { |ul| ul.language_id == params[:spoken_language].to_i && ul.spoken? }
    end
  end

  # Filtrer par langue souhaitée
  if params[:wanted_language].present?
    @users = @users.select do |user|
      user.user_languages.any? { |ul| ul.language_id == params[:wanted_language].to_i && ul.wanted? }
    end
  end
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
