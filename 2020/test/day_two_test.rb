# frozen_string_literal: true

require_relative '../lib/env'
require_relative '../day_two/day_two'

class DayTwoTest < Minitest::Test
  def test_part_1_practice
    assert_equal 2, DayTwo.new(DayTwoInput.practice).solve_part_one
  end

  def test_part_1_real
    assert_equal 572, DayTwo.new(DayTwoInput.real).solve_part_one
  end

  def test_part_2_practice
    assert_equal 1, DayTwo.new(DayTwoInput.practice).solve_part_two
  end

  def test_part_2_real
    assert_equal 306, DayTwo.new(DayTwoInput.real).solve_part_two
  end
end
