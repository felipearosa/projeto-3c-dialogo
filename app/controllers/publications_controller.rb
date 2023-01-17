class PublicationsController < ApplicationController
  skip_before_action :authenticate_user!, only: [:index, :show]

  def index
    @publications = Publication.all
  end

  def show
    @publication = Publication.find(params[:id])
    authorize @publication
  end

  def new
    if current_user
      @user = current_user
      @publication = Publication.new
    else
      redirect_to publications_path
    end
  end

  def create
    @publication = Publication.new(publication_params)
    authorize current_user
    if @publication.save
      redirect_to publication_path(@publication)
    else
      render :new, status: :unprocessable_entity
    end
  end

  def edit
    if current_user
      @publication = Publication.find(params[:id])
    else
      redirect_to publications_path
    end
  end

  def update
    @publication = Publication.find(params[:id])
    @publication.update(publication_params)

    authorize current_user
    if @publication.save
      redirect_to publication_path(@publication)
    else
      render :new, status: :unprocessable_entity
    end

  end

  def destroy
    @publication = Publication.find(params[:id])
    authorize current_user
    @publication.destroy
    redirect_to publications_path, status: :see_other
  end

  private

  def publication_params
    params.require(:publication).permit(:title, :subtitle,:author, :text, :date, :pdf_url)
  end

end
