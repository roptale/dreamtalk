Rails.application.routes.draw do
  devise_for :users
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  # Reveal health status on /up that returns 200 if the app boots with no exceptions, otherwise 500.
  # Can be used by load balancers and uptime monitors to verify that the app is live.
  get "up" => "rails/health#show", as: :rails_health_check

  # Defines the root path route ("/")
  root to: "users#index"

  get "landing", to: "pages#landing"
  get "profile", to: "profile#edit"
  post "update_profile", to: "profile#update"

  # get 'messages/create'
  # get 'chatrooms/index'
  # get 'chatrooms/show'

  get '/favorites_profiles', to: 'profile#index', as: 'favorites_profiles'


  resources :users do
    post 'toggle_favorite', on: :member
    resources :chatrooms, only: [:create]
  end
  resources :chatrooms, only: [:index, :show, :new] do
    resources :messages, only: :create
    post '/token', to: 'chatrooms#token', on: :member
  end
end
