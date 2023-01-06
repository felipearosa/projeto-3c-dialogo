Rails.application.routes.draw do
  devise_for :users
  root to: "pages#home"
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  get '/publicacoes', to: 'publications#index'
  resources :publications
  # Defines the root path route ("/")
  # root "articles#index"

  get '/treinamentos', to: 'pages#trainning'
  get '/livro', to: 'pages#book'
  get '/sobre', to: 'pages#about'
end
