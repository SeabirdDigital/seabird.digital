<script lang="ts">
	let name: boolean, email: boolean, message: boolean;
</script>

<form action="/api/kontakt" method="post">
	<div class="input-field">
		<input required id="name" name="name" type="text" autocomplete="name" class="validate" />
		<label for="name">Namn<span class="required">*</span></label>
	</div>
	<div class="input-field">
		<input required id="email" name="email" type="email" autocomplete="email" class="validate" />
		<label for="email">Email<span class="required">*</span></label>
	</div>
	<div class="input-field">
		<input id="website" name="website" type="url" autocomplete="url" class="validate" />
		<label for="website">Nuvarande sida</label>
	</div>
	<div class="input-field">
		<textarea required id="message" name="message" class="materialize-textarea validate" />
		<label for="message">Meddelande<span class="required">*</span></label>
	</div>
	<button id="contact-submit" type="submit" disabled={name && email && message}>Skicka</button>
</form>

<style lang="postcss">
	form {
		display: flex;
		flex-direction: column;
		gap: 1rem;

		& > div {
			display: flex;
			flex-direction: column;

			&.input-field {
				input:focus + label,
				textarea:focus + label {
					color: #9e9e9e;
				}
				input:focus {
					border-bottom: 1px solid var(--sb-blue);
					box-shadow: 0 1px 0 0 var(--sb-blue);
				}
			}
		}

		button {
			width: fit-content;
			margin-left: auto;

			font-size: 1.25rem;

			border-color: white;
			border-bottom: 2px;
			border-style: solid;

			opacity: 0.7;

			transition: all 200ms, opacity 500ms;

			&:hover {
				padding-bottom: 0.75rem;
				margin-bottom: -0.75rem;

				opacity: 1;
				border-color: transparent;
			}
		}

		.required {
			color: var(--sb-orange);
		}
	}
</style>
