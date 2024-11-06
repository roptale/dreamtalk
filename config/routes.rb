Rails.application.routes.draw do
  get 'messages/create'
  get 'chatrooms/index'
  get 'chatrooms/show'
  devise_for :users
  root to: "users#index"
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  # Reveal health status on /up that returns 200 if the app boots with no exceptions, otherwise 500.
  # Can be used by load balancers and uptime monitors to verify that the app is live.
  get "up" => "rails/health#show", as: :rails_health_check

  # Defines the root path route ("/")
  # root "posts#index"
  resources :users do
    post 'toggle_favorite', on: :member
  end

  get "profile", to: "profile#edit"
  post "update_profile", to: "profile#update"

  resources :chatrooms, only: [:index, :show, :new, :create] do
    resources :messages, only: :create
  end

  get 'favorites_profiles', to: 'profile#index', as: 'favorites_profiles'
end
