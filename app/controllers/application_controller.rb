class ApplicationController < ActionController::Base
  before_action :authenticate_user!
  before_action :check_onboarded

  private

  def check_onboarded
    return if request.path == destroy_user_session_path
    if current_user && !current_user.onboarded?
      redirect_to profile_path
    end
  end
end
