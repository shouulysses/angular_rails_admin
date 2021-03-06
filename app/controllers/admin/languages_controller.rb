class Admin::LanguagesController < ApplicationController
  before_action :set_language, only: [:show, :edit, :update, :destroy]
  before_action :set_ng_app

  def ng_index
    @language = Language.new
      
  end

  # GET /languages
  # GET /languages.json
  def index
    @languages = Language.all
  end

  # GET /languages/1
  # GET /languages/1.json
  def show
  end

  # GET /languages/new
  def new
    @language = Language.new
  end

  # POST /languages
  # POST /languages.json
  def create
    @language = Language.new(language_params)
    
    respond_to do |format|
      if @language.save
        format.html { redirect_to admin_languages_url, notice: 'Language was successfully created.' }
        format.json { render :show, status: :created, location: admin_languages_path(@language) }
      else
        format.html { render :new }
        format.json { render json: @language.errors, status: :unprocessable_entity }
      end
      
    end
  end

  # PATCH/PUT /languages/1
  # PATCH/PUT /languages/1.json
  def update
    respond_to do |format|
      if @language.update(language_params)
        format.html { redirect_to admin_languages_url, notice: 'Language was successfully updated.' }
        format.json { render :show, status: :ok, location: admin_languages_path(@language) }
      else
        format.html { render :edit }
        format.json { render json: @language.errors, status: :unprocessable_entity }
      end
    end
  end

  # DELETE /languages/1
  # DELETE /languages/1.json
  def destroy
    @language.destroy
    respond_to do |format|
      format.html { redirect_to admin_languages_url, notice: 'Language was successfully destroyed.' }
      format.json { head :no_content }
    end
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_language
      @language = Language.find(params[:id])
      @language_detail = LanguageDetail.find_by_id(params[:id])
    end

    # Never trust parameters from the scary internet, only allow the white list through.
    def language_params
      params.require(:language).permit(:name, language_details_attributes: [:more])
    end

    def set_ng_app
      @ng_app = 'languageApp'
    end
end
