class PagesController < ApplicationController
  skip_before_action :authenticate_user!, only: [ :home ]
  skip_before_action :check_onboarded, only: [ :home ]

  def home
  end

  def landing
  end
end
