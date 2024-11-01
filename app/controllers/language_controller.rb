class LanguageController < ApplicationController
  def my_languages
    @available_languages = Language.all.map { |language| [language.name, language.id] }
    @spoken_languages = current_user.user_languages.where(spoken: true)
    @wanted_languages = current_user.user_languages.where(wanted: true)
  end

  def update_languages
    first_name = params[:first_name]
    age = params[:age]
    city = params[:city]
    description = params[:description]
    spoken_languages = params[:spoken_languages].reject(&:blank?).map(&:to_i)
    wanted_languages = params[:wanted_languages].reject(&:blank?).map(&:to_i)
    puts "first_name: #{first_name}"
    puts "spoken_languages: #{spoken_languages}"
    puts "wanted_languages: #{wanted_languages}"

    if spoken_languages.empty? || wanted_languages.empty?
      redirect_to my_languages_path, alert: 'You must select at least one spoken and one wanted language.'
      return
    end

    current_user.update(first_name: first_name)
    current_user.update(age: age)
    current_user.update(city: city)
    current_user.update(description: description)

    # Reset all languages
    current_user.user_languages.where(spoken: true).destroy_all
    current_user.user_languages.where(wanted: true).destroy_all

    # Add the new languages
    spoken_languages.each do |language_id|
      current_user.user_languages.create(language_id: language_id, spoken: true)
    end
    wanted_languages.each do |language_id|
      current_user.user_languages.create(language_id: language_id, wanted: true)
    end

    redirect_to my_languages_path, notice: 'Profile updated successfully.'
  end
end
