package de.tum.cit.aet.artemis.iris.domain.settings;

import jakarta.persistence.CascadeType;
import jakarta.persistence.DiscriminatorValue;
import jakarta.persistence.Entity;
import jakarta.persistence.FetchType;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.OneToOne;

import com.fasterxml.jackson.annotation.JsonInclude;

import de.tum.cit.aet.artemis.exercise.domain.Exercise;

/**
 * An {@link IrisSettings} implementation for exercise specific settings.
 * Exercise settings are used to override course settings and currently only allow setting the {@link IrisChatSubSettings}.
 */
@Entity
@DiscriminatorValue("EXERCISE")
@JsonInclude(JsonInclude.Include.NON_EMPTY)
public class IrisExerciseSettings extends IrisSettings {

    @OneToOne(optional = false)
    @JoinColumn(name = "exercise_id", unique = true, nullable = false)
    private Exercise exercise;

    @OneToOne(cascade = CascadeType.ALL, orphanRemoval = true, fetch = FetchType.EAGER)
    @JoinColumn(name = "iris_chat_settings_id")
    private IrisChatSubSettings irisChatSettings;

    @OneToOne(cascade = CascadeType.ALL, orphanRemoval = true, fetch = FetchType.EAGER)
    @JoinColumn(name = "iris_text_exercise_chat_settings_id")
    private IrisTextExerciseChatSubSettings irisTextExerciseChatSettings;

    public Exercise getExercise() {
        return exercise;
    }

    public void setExercise(Exercise exercise) {
        this.exercise = exercise;
    }

    @Override
    public IrisLectureIngestionSubSettings getIrisLectureIngestionSettings() {
        return null;
    }

    @Override
    public void setIrisLectureIngestionSettings(IrisLectureIngestionSubSettings irisLectureIngestionSettings) {
    }

    @Override
    public IrisLectureChatSubSettings getIrisLectureChatSettings() {
        return null;
    }

    @Override
    public void setIrisLectureChatSettings(IrisLectureChatSubSettings irisLectureChatSettings) {
        // Empty because exercises don't have lecture chat settings
    }

    @Override
    public IrisChatSubSettings getIrisChatSettings() {
        return irisChatSettings;
    }

    @Override
    public void setIrisChatSettings(IrisChatSubSettings irisChatSettings) {
        this.irisChatSettings = irisChatSettings;
    }

    @Override
    public IrisTextExerciseChatSubSettings getIrisTextExerciseChatSettings() {
        return irisTextExerciseChatSettings;
    }

    @Override
    public void setIrisTextExerciseChatSettings(IrisTextExerciseChatSubSettings irisTextExerciseChatSettings) {
        this.irisTextExerciseChatSettings = irisTextExerciseChatSettings;
    }

    @Override
    public IrisCourseChatSubSettings getIrisCourseChatSettings() {
        // Empty because exercises don't have course chat settings
        return null;
    }

    @Override
    public void setIrisCourseChatSettings(IrisCourseChatSubSettings irisCourseChatSettings) {
        // Empty because exercises don't have course chat settings
    }

    @Override
    public IrisCompetencyGenerationSubSettings getIrisCompetencyGenerationSettings() {
        return null;
    }

    @Override
    public void setIrisCompetencyGenerationSettings(IrisCompetencyGenerationSubSettings irisCompetencyGenerationSubSettings) {

    }

    @Override
    public IrisFaqIngestionSubSettings getIrisFaqIngestionSettings() {
        // Empty because exercises don't have exercise faq settings
        return null;
    }

    @Override
    public void setIrisFaqIngestionSettings(IrisFaqIngestionSubSettings irisFaqIngestionSubSettings) {
        // Empty because exercises don't have exercise faq settings

    }
}
