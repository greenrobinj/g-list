Rails.application.routes.draw do

  namespace :api do
    resources :stuffs
  end

end
