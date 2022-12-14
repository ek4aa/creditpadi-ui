Rails.application.routes.draw do
  namespace :api do
    namespace :v1 do
      get 'auth/index'
      get 'auth/signin'
      get 'auth/signup'
      get 'auth/signout'
    end
  end
  root 'homepage#index'
  get '/*path' => 'homepage#index'

  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  # Defines the root path route ("/")
  # root "articles#index"
end
