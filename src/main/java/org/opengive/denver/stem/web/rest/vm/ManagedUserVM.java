package org.opengive.denver.stem.web.rest.vm;

import java.time.ZonedDateTime;
import java.util.Set;

import javax.validation.constraints.Size;

import org.opengive.denver.stem.domain.Address;
import org.opengive.denver.stem.service.dto.UserDTO;

/**
 * View Model extending the UserDTO, which is meant to be used in the user management UI.
 */
public class ManagedUserVM extends UserDTO {

	public static final int PASSWORD_MIN_LENGTH = 4;

	public static final int PASSWORD_MAX_LENGTH = 100;

	@Size(min = PASSWORD_MIN_LENGTH, max = PASSWORD_MAX_LENGTH)
	private String password;

	public ManagedUserVM() {
		// Empty constructor needed for Jackson.
	}

	public ManagedUserVM(final Long id, final String login, final String password, final String firstName, final String lastName,
			final String email, final String phoneNum, final Address address, final boolean activated,
			final String imageUrl, final String langKey,
			final String createdBy, final ZonedDateTime createdDate, final String lastModifiedBy, final ZonedDateTime lastModifiedDate,
			final Set<String> authorities) {

		super(id, login, firstName, lastName, email, phoneNum, address, activated, imageUrl, langKey,
				createdBy, createdDate, lastModifiedBy, lastModifiedDate,  authorities);

		this.password = password;
	}

	public String getPassword() {
		return password;
	}

	@Override
	public String toString() {
		return "ManagedUserVM{" +
				"} " + super.toString();
	}
}
