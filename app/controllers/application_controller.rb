class ApplicationController < ActionController::Base
  # before_action :authenticate_user!
  before_action :redirect_unauthenticated_users
  before_action :check_onboarded

  private

  def redirect_unauthenticated_users
    unless user_signed_in? || request.path == landing_path || devise_controller?
      redirect_to landing_path
    end
  end

  def check_onboarded
    return if request.path == destroy_user_session_path
    if current_user && !current_user.onboarded?
      redirect_to profile_path
    end
  end
end
